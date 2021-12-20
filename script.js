//Günlük çalışılan saati döndüren fonksiyon
function getStudyHours(day) {
    
        switch (day) {
            case "pazartesi":
                return 10;
                break;
    
            case "sali":
                return 9;
                break;
    
            case "carsamba":
                return 8;
                break;
    
            case "persembe":
                return 5;
                break;
    
            case "cuma":
                return 6;
                break;
    
            case "cumartesi":
                return 4;
                break;
    
            case "pazar":
                return 0;
                break;
    
            default:
                return "Hatalı"
                break;
        }
    }
    
    
    //Haftalık toplam çalışılan saati döndüren fonksiyon
    function getActualStudyHours() {
    
        return getStudyHours("pazartesi")+getStudyHours("sali")+getStudyHours("carsamba")+getStudyHours("persembe")+getStudyHours("cuma")+getStudyHours("cumartesi")+getStudyHours("pazar")
        
    } 
    
    //Haftada toplam çalışılan saat
    console.log(`Haftada Toplam ${getActualStudyHours()} saat çalıştınız.`);
    
    
    
    //Haftalık toplam çalışılması gereken saati döndüren fonksiyon
    function getIdealStudyHours () {
    
    let idealHours=8*7   
    return idealHours
    
    }
    
    //Haftada toplam çalışılması gereken saat
    console.log(`Haftada Toplam ${getIdealStudyHours()} saat çalışmalısınız.`);
    
    //İdeal çalışma saati ile gerçekleşen saat arasındaki farkı karşılaştırarak sonucu döndüren fonksiyon
    function calculateStudyDebt() {
    
        if (getActualStudyHours()===getIdealStudyHours ()){
    
            return `Toplam ${getActualStudyHours()} saat çalışarak tam mesai saatini doldurdunuz`
    
        }else if (getActualStudyHours()>getIdealStudyHours ()) {
    
            return `Toplam ${getActualStudyHours()} saat çalıştınız. Bu hafta ${getActualStudyHours()-getIdealStudyHours ()} saat fazla çalıştınız`
            
        }else {
    
            return `Toplam ${getActualStudyHours()} saat çalıştınız. Bu hafta ${getIdealStudyHours ()-getActualStudyHours()} saat az çalıştınız`
        }    
    }
    
    
    // İdeal çalışma saati ile gerçekleşen saat arasındaki farkı mesajla konsola yazdırma
    console.log(calculateStudyDebt());