export type ProcurementType = 'Supplies' | 'Non Consultancy Services' | 'Consultancy Services'

export interface ProcurementNotice {
  id: string
  reference: string
  entity: string
  type: ProcurementType
  subject: string
  published: string
  deadline: string
}

