# Ndee #

Ndee is a light-weight http server, written in Javascript, using Node.

## Example of early configuration file ##

    exports.config = {
      listen: {
        port: 80,
        // hostname: localhost, // omit this to listen on all interfaces
        // path: unix_socket // omit post and hostname and use path to listen to a unix socket
      },
      
      document_root: '/mnt/samba/node.ndee.js/webroot',
      directory_indexes: ['index.html', 'index.sjs'],
      
      virtual_hosts: [
        { // Wolf Alpha
          host: 'wolf-alpha',
          document_root: '/wolf'
        },
        { // Yuppie
          host: 'yuppie.cx',
          aliases: ['www.yuppie.cx'],
          document_root: '/yuppie'
        },
        { // Home
          host: '192\.168\.0\.10',
          aliases: ['www.yuppie.cx', 'davey.local'],
          document_root: ''
        },
      ],
    };