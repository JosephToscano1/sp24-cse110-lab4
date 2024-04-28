for(carStat in statistics)
{
    if(carStat.charAt(0) == 'r'){
        console.log(statistics[carStat]);
    }else{
        if(statistics[carStat] % 2 != 0)
        {
            console.log(statistics[carStat]);
        }
    }
}
