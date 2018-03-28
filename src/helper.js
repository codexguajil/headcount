export default class DistrictRepository {
  constructor(data) {
    this.stats = cleanData(data)
  }

  cleanData(data) {
    return data.reduce((objAcc, district) => {
      if(!district.location) {
        objAcc[district.location] = { district.TimeFrame: district.data }
      }


      return objAcc
    }, {})
  }

}
