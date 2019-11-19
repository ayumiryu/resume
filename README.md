# resume
@copyright@ YI LIU: my personal work of my resume, just for communication and study,
don't copy or use it for any business

# File system
This is a ftp client of Python, using socket lib and Passive mode.

• Operating system used: Windows 10
• Programing language used: Python(2.7.16)

### Compiling instructions:
1. please install python first;
2. then in CMD, change to the file directory, input: 
```
>python socketc.py
```
3. then please input the server name/IP address, and login
4. Here is some command I create
```
 ls              | List the files in the current directory on the remote server.
 cd              | Change the current directory to -remote-dir- on the remote server.
 get remote-file | Download the file -remote-file- from the remote server to the local machine.
 put             | local-file Upload the file -local-file- from the local machine to the remote server.
 delete file     | Delete the file -remote-file- from the remote server.
 quit            | Quit the FTP client
 ```
