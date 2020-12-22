var watch={
    hours : 0,
    minuts : 0,
    seconds : 0,
    idDestiny : "watch",

    show:function()
    {
        if (watch.hours > 0 || watch.minuts > 0 || watch.seconds > 0)
        {
            watch.seconds--;
            if (watch.seconds < 0)
            {
                watch.seconds = 59;
                watch.minuts--;
            }
            if (watch.minuts < 0)
            {
                watch.minuts = 59;
                watch.hours--;
            }

            var string=watch.twocharacters(watch.hours)+':'+watch.twocharacters(watch.minuts)+':'+watch.twocharacters(watch.seconds);
            document.getElementById(watch.idDestiny).innerHTML = string;
        }
    },

    start:function()
    {
        setInterval(watch.show, 1000);
    },

    twocharacters:function(number)
    {
        if(String(number).length==1)
            return "0"+number;
        return number;
    },
}