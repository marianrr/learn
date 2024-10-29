console.log('first...')


/*
creare fisier cu inserare text
"console('first...')" | Out-File -FilePath "file.js" -Encoding utf8


add-Content -Path "file4.js" -Value "console.log('first...')" -Encoding utf8


Set-Content -Path "file3.js" -Value "console.log('first...')" -Encoding utf8


# Creează fișierul și adaugă primele două linii
"console.log('first....')" | Out-File -FilePath "file.js" -Encoding utf8
"console.log('second...')" | Out-File -FilePath "file.js" -Encoding utf8 -Append

# Citește fișierul, elimină ultima linie și rescrie
$content = Get-Content "file.js"
$content = $content[0..($content.Count - 2)]
Set-Content -Path "file.js" -Value $content -Encoding utf8

# Adaugă ultimele două linii
"console.log('third...')" | Out-File -FilePath "file.js" -Encoding utf8 -Append
"console.log('fourth...')" | Out-File -FilePath "file.js" -Encoding utf8 -Append






*/


