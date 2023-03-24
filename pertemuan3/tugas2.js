const isAdult = (umur)=> {
    if(umur >= 17){
        return true
    }else{
        return false
    }
}

const isTallEnough = (tinggi)=> {
    if(tinggi >= 160){
        return true
    }else{
        return false
    }
}


if(isAdult(18) >= 17 && isTallEnough(170) >= 160){
    console.log("Bisa dapat melakukan donor")
}else{
    console.log("Anda tidak memenuhi syarat")
}
