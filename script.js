let btn=document.querySelector("#btn")
let content=document.querySelector("#Content")
let voice=document.querySelector("#voice")

function speak(text){
   let text_speak=new SpeechSynthesisUtterance(text)
   text_speak.rate=1
   text_speak.pitch=1
   text_speak.volume=1
   text_speak.lang="hi-GB"
   window.speechSynthesis.speak(text_speak)
}

function wishMe(){
   let day=new Date()
   let hr=day.getHours()
    if(hr>=0 && hr<12){
         speak("Good Morning Aayush!")
    }else if(hr>=12 && hr<16){
         speak("Good Afternoon Aayush!")
    }else {
            speak("Good Evening Aayush!")
    }
}
//window.addEventListener("load",()=>{
 //   wishMe();
//})

let SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new SpeechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript .toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("Hello Aayush,How can I help you?")
    }else if(message.includes("how are you")){
        speak("I am fine,Aayush. What about you?")
    }else if(message.includes("what is your name")){
        speak("My name is Shifra,Your virtual assistant.")
    }else if(message.includes("who created you")||message.includes("who is your creator")){
        speak("I was created by Aayush Sharma.")
    }else if(message.includes("time")){
        let date=new Date()
        let hours=date.getHours()
        let minutes=date.getMinutes()
        speak(`The time is ${hours} ${minutes}`)
    }else if(message.includes("open youtube")){
        speak("Opening Youtube")
        window.open("https://www.youtube.com")
    } else if(message.includes("open google")){
        speak("Opening Google")
        window.open("https://www.google.com")
    } else if(message.includes("open facebook")){
        speak("Opening Facebook")
        window.open("https://www.facebook.com")
    } else if(message.includes("open instagram")){
        speak("Opening Instagram")
        window.open("https://www.instagram.com")
    }else if(message.includes("open github")){
        speak("Opening Github")
        window.open("https://www.github.com")
    }else if(message.includes("open calculator")){
        speak("Opening Calculator")
        window.open("calc:")
    }else if(message.includes("open notepad")){
        speak("Opening Notepad")
        window.open("notepad:")
    }else if(message.includes("open command prompt")){
        speak("Opening Command Prompt")
        window.open("cmd:")
    }else if(message.includes("open whatsapp")){
        speak("Opening Whatsapp")
        window.open("https://web.whatsapp.com/")
    }else if(message.includes("thank you")){
        speak("You're welcome,Aayush.")
    }else{
        let finalText= "this is what i found on internet regarding" + message.replace("shipraa","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shifra","")}` , "_blank")
    }
}