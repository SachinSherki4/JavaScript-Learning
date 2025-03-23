document.getElementById("demo1").innerHTML="First Message change"
    document.getElementById("demo2").innerHTML="Second message Changes"
    document.getElementById("myBtn").onclick=displayDate;

    function displayDate(){
        document.getElementById("myDate").innerHTML=Date();
        console.log("This is to print logs in console before reflecting click action on webpage.")
    }