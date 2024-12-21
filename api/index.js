import axios from 'axios';



const axiosInstance = axios.create({
  baseURL: "https://unsd.onrender.com/api", 
  headers: {
    Authorization: `Bearer 2f6e5c6a706e0dbaf9a2463a5129a8b51fed88b980b0f32547c6f5c1e181b969f46458188427bf25c7732cda1c2c3c418b18ebe2faab5ade49b9edb0ca1e975c73e6a4a25cf618ccc5603a68ea7d68c2ef87b694f7fcde924200a6b61ebe946342185f81b818db56972a69ba6f1fc69f56601d0e210582b4ccc585a217932c1c`,
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:1337/api/auth/local', {
            identifier: loginId,
            password: password,
        });
        const { jwt, user } = response.data;

        // Store the token and user in localStorage
        localStorage.setItem('token', jwt);
        localStorage.setItem('user', JSON.stringify(user));

        return { token: jwt, user };
    } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
        throw error;
    }
};

export const loginClient = async (loginId, password) => {
    try {
        const response = await axiosInstance.get(`/clients?filters[loginId][$eq]=${loginId}`);
        const client = response.data.data[0]; // Assuming you get an array of clients

        console.log("client", client);
        
        if (!client) {
            throw new Error('Client not found');
        }

        // Optionally, verify password if you are storing hashed passwords, otherwise skip this
        if (client.password !== password) {
            throw new Error('Invalid credentials');
        }

        // Store client data in localStorage
        localStorage.setItem('user', JSON.stringify(client));
        
        return client;
    } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
        throw error;
    }
};


export const registerUser = async (fullName, username, phone, password) => {
    try {
        const response = await axios.post('http://localhost:1337/api/auth/local/register', {
            username,
            email: `${username}@example.com`, // Modify this depending on your app requirements
            password,
            phone,
            fullName,
        });
        const { jwt, user } = response.data;

        // Store the token and user in localStorage
        localStorage.setItem('token', jwt);
        localStorage.setItem('user', JSON.stringify(user));

        return { token: jwt, user };
    } catch (error) {
        console.error('Registration failed:', error.response?.data || error.message);
        throw error;
    }
};

export const registerClient = async (fullName, username, phone, password, country) => {
    try {
        const response = await axiosInstance.post('/clients', {
            data: {
                username,
                phoneNumber: phone,
                password,
                fullname: fullName,
                country
            },
        });

        const client = response.data.data;

        localStorage.setItem('user', JSON.stringify(client));

        return client;
    } catch (error) {
        console.error('Registration failed:', error.response?.data || error.message);
        throw error;
    }
};


export const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

export const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    console.log("Client in localStorage:", user);
    return user !== null;
};

export const fetchUserCertificate = async (loginId) => {
    console.log("loginId", loginId);
    try {
        const response = await axiosInstance.get(`/certificates?filters[client][loginId][$eq]=${loginId}&populate=client`);
        return response.data;
    } catch (error) {
        console.error('Error fetching certificate:', error.response?.data || error.message);
        throw error;
    }
};