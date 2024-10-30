/*  creez fisier gol

"" | Out-File -FilePath "fisier1.txt" -Encoding utf8  
Set-Content -Path "fisier2.txt" -Value "" -Encoding utf8
Add-Content -Path "fisier3.txt" -Value "" -Encoding utf8
 e set de 2 comenzi: 
"" | Out-File -FilePath "fisier4.txt" -Encoding utf8
Out-Null

*/

// creeaza fisierul
//"console.log('first...')" | out-file  -filepath file3.js -encoding utf8  
//add-content -path "file4.js" -value "console.log('first...')" -encoding utf8
console.log('this is good...')
// adauga o linie noua la fisierul existent
//"console.log('second...')" | out-file -filepath "file3.js" -encoding utf8 -append
//add-content -path "file4.js" -value "console.log('second...')" -encoding utf8

console.log('second...')
// modifica si inlocuieste integral continutul din fisierul existent
// set-content -path "file4.js" -value "console.log('second...')" -encoding utf8


// eliminare ultima linie din textul fisierului

// $lines = Get-Content -Path "file4.js"
//  $lines | Select-Object -SkipLast 1 | Set-Content -Path "file4.js"


// eliminare ultimul cuvant din textul fisierului
// (Get-Content -Path "file4.js") -replace '\b\w+\b(?=\s*$)' | Set-Content -Path "file4.js"
// (Get-Content "file4.js") | % { $_ -replace '\b\w+\b(?=\s*$)' } | Set-Content "file4.js"