

    #include<stdio.h>
    #include<stdlib.h>
    #include<string.h>
    #include<netdb.h>
    #include<sys/socket.h>
    #include <arpa/inet.h>
    #include <unistd.h>
    #define MAX 200
    #define PORT 8080
    #define SA struct sockaddr


    void func(int sockfd)
    {
        char buff[MAX], str[MAX];
        int count = 0;
        memset(buff, '\0', sizeof(buff));

        // read the message from client and copy it in buffer
        read(sockfd, buff, sizeof(buff));

        // copy the contents of the file to another array
        while(buff[count] != '\0')
        {
            str[count] = buff[count];
            count++;
        }
        //--------------------------------------------------//

        FILE *fp;

        if((fp = fopen("server.txt", "wb")) != NULL)
            printf("Successfully");

        if(fwrite(str, 1, strlen(str), fp) == -1)
            printf("Error\n");

        fclose(fp);

    }

    int main() {

        int sockfd, connfd, len;
        struct sockaddr_in servaddr, cli;

        // socket create and verification
        sockfd = socket(AF_INET, SOCK_STREAM, 0);
        if (sockfd == -1) {
            printf("socket creation failed...\n");
            exit(0);
        }
        else
            printf("Socket successfully created..\n");
        //-----------------------------------------------------//

        memset(&servaddr, '\0', sizeof(servaddr));

        // assign IP, PORT
        servaddr.sin_family = AF_INET;
        servaddr.sin_addr.s_addr = htonl(INADDR_ANY);
        servaddr.sin_port = htons(PORT);

        // Binding newly created socket to given IP and verification
        if ((bind(sockfd, (SA*)&servaddr, sizeof(servaddr))) != 0) {
            printf("socket bind failed...\n");
            exit(0);
        }
        else
            printf("Socket successfully binded..\n");

        // Now server is ready to listen and verification
        if ((listen(sockfd, 5)) != 0) {
            printf("Listen failed...\n");
            exit(0);
        }
        else
            printf("Server listening..\n");
        len = sizeof(cli);

        // Accept the data packet from client and verification
        connfd = accept(sockfd, (SA*)&cli, &len);
        if (connfd < 0) {
            printf("server acccept failed...\n");
            exit(0);
        }
        else
            printf("server acccept the client...\n");

        // Function for chatting between client and server
        func(connfd);

        // After chatting close the socket
        close(sockfd);

        return 0;
    }
