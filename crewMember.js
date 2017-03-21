
class CrewMember {
  constructor( position){
    this.position = position
    this.currentShip= "Looking for a Rig"
    }

    engageWarpDrive(){
      if (this.currentShip != "Looking for a Rig"){
        switch (this.position) {
          case "Pilot":
            this.currentShip.warpDrive= "engaged!"
            break;
          default:
            return 'had no effect'
        }
      }else{
        return 'had no effect'
      }
      }

    setsInvisibility(){
      if (this.currentShip != "Looking for a Rig"){
        switch (this.position) {
          case "Defender":
            this.currentShip.cloaked= true
            break;
          default:
            return 'had no effect'
        }
      }else{
        return 'had no effect'
      }
      }

    chargePhasers(){
        if (this.currentShip != "Looking for a Rig"){
          switch (this.position){
          case "Gunner":
            this.currentShip.phasersCharge= "charged!"
          break;
          default:
            return 'had no effect'
        }}else{
        return 'had no effect'
                }
        }

  }
