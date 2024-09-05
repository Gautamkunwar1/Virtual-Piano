const allKeys = document.querySelectorAll(" .piano .key");

allKeys.forEach((key,i)=>{
    key.onclick=()=>{
      
        const sound = "paino_sounds/key"+(i+1)+ ".mp3";
        //i+1 = because piano key music index start from 1 and last index =23
        const audio = new Audio(sound);
        audio.play();
    }
})
