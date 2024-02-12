var weekDay = prompt("დაწერეთ კვირის რომელიმე დღე (ქართულად)")
if(weekDay == "ორშაბათი" || weekDay == "სამშაბათი" || weekDay == "ოთხშაბათი" || 
weekDay == "ხუთშაბათი" || weekDay == "პარასკევი"){console.log("სამუშაო დღე")}

else if(weekDay == "შაბათი" || weekDay == "კვირა"){console.log("დასვენების დღე")}

else{console.log("შეცდომაა")}