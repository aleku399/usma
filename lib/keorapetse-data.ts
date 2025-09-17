export interface Document {
    id: number
    title: string
    description: string
    category: string
  }
  
  export const documents: Document[] = [
    {
      id: 1,
      title: "Passport - Cover",
      description: "Official Republic of Botswana passport cover",
      category: "identification",
    },
    {
      id: 2,
      title: "Passport - Inside Pages",
      description: "Passport identification pages with personal details",
      category: "identification",
    },
    {
      id: 3,
      title: "National ID Card",
      description: "Official national identity card from Republic of Botswana",
      category: "identification",
    },
    {
      id: 4,
      title: "Business Quotation",
      description: "Quotation for branded merchandise from Keorapetse Investments",
      category: "business",
    },
  ]
  
  export const documentImages = [
    "/p.png",
    "/p1.png",
    "/p2.png",
    "/p3.png",
  ]
  