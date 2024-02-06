export interface Report {
}

export interface VesselDropList {
  VesselId: number,
  VesselName: string,
  IMONumber: number
}

export interface OtherDropdownList {
  StatusList: StatusList[],
  OwnerList: OwnerList[],
  QuartersList: QuartersList[]
}
export interface PortDropDownList {
  CargoToLoads: CargoToLoads[],
  DischargePorts: DischargePorts[],
  LoadToPorts: LoadToPorts[],
  ShaVendors: ShaVendors[],
  SCGVendors: SCGVendors[],
}



export interface MURListDropDown {
  HoldPassList:HoldPassList[]
  ITDStatusList:ITDStatusList
  OwnerList:OwnerList[]
  SCGStatusList:SCGStatusList[]
  SHAList:SHAList[]
  ShoreCleaningGangList:ShoreCleaningGangList[]
  StatusList:StatusList[]
  ltrMurList:ltrMurList[]
}
export interface CargoToLoads {

  CargoToLoads:string

}
export interface DischargePorts {

  DischargePort:string

}
export interface LoadToPorts {

  LoadToPorts:string

}
export interface ShaVendors {

  SHAVendor:string

}
export interface SCGVendors {

  SHAVendor:string

}
export interface StatusList {

  StatusId: number,
  StatusName: string

}
export interface OwnerList {

  OwnerId: number,
  OwnerName: string

}
export interface QuartersList {

  Quarter: string,
  QuarterName: string

}
export interface SHAList {

  ShaId: number,
  SHAName: string

}
export interface ITDStatusList {

  PlanStatusId: number,
  PlanStatusName: string

}
export interface SCGStatusList {

  PlanStatusId: number,
  PlanStatusName: string

}
export interface HoldPassList {

  HoldPassId: number,
  HoldPassName: string

}
export interface ShoreCleaningGangList {

  ShoreCleaningGangId: number,
  ShoreCleaningGangCompanyName: string

}
export interface ltrMurList {

  LTCMURId: number,
  LTCMURName: string

}
