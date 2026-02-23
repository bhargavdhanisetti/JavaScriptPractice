arr = [" 10 ","20", "30",", ","40"]
cleanedarr = arr.map(n => Number(n.trim()));
console.log(cleanedarr);

array = cleanedarr.filter(n => !isNaN(n));
console.log(array)