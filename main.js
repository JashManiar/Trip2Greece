
speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Welcome to my first independent website. Its going to be about my pre trip preparations and post trip experience. I am sure this will be very helpful on your trip to greece. If you're wondering how to plan your first trip to Greece then this Greece travel guide, packed with Greece travel tips, is for you. Everything from where to go in Greece, things to do in Greece, how to travel Greece, Greek island hopping, Greek food and much more."
    "In this Greek Islands travel guide, I'll cover Athens, Santorini, Paros, Antiparos, Rhodos, Crete, Mykonos and other greek islands. If you plan on doing Greece travel, in this Greece travel vlog, you'll learn everything about how to plan a trip to Greece - packing for Greece, how to travel around Greece, Greek style, how to see Greece, Greek ferries, best time to visit Greece, best places to visit in Greece, what to eat in Greece and so much more." 
    "Traveling to Greece and travel in Greece will be easy with these travel tips. Enjoy your trip to Greece and vacation in Greece! Greece is truly a one-of-a-kind country!";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

