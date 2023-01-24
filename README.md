Backend:

add in .env:
```
DBHOST=localhost
DBUSER=
DBPASSWD=
DBNAME=dbblog
SECRETKEY=
```

create db.

```
CREATE TABLE tbuser (  \
userid int NOT NULL AUTO_INCREMENT, \
username  varchar(235) NOT NULL, \
email varchar(235) NOT NULL, \
password varchar(253) NOT NULL, \
timestap TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, \
PRIMARY KEY (userid));
```
Frontend:

add in .env:
```
SKIP_PREFLIGHT_CHECK=true
```

topics:
components
