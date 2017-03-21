class Spaceship {
  constructor(name,crew,phasers,shields ){
  this.name= name
  this.crew= crew
  this.phasers= phasers
  this.shields=shields

  this.cloaked = false
  this.warpDrive= "disengaged"
  this.phasersCharge='uncharged'
  this.docked = !Boolean(crew.length) /* checks true or flas econtent of array */

  this.registerCrewMembers()
}

  registerCrewMembers(){
    this.crew.forEach((member)=>{
      member.currentShip = this
    })
  }

}
