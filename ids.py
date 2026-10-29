sudo apt update

sudo apt install snort -y

snort -V

nano /etc/snort/rules/local.rules

alert icmp any any -> any any (msg:"ICMP Ping Detected"; itype:8; sid:1000001; rev:1;)

sudo snort -A console -q -c /etc/snort/snort.conf -i lo


ping -c 4 127.0.0.1

