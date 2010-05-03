exports.config = {
  listen: {
    port: 4000,
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
      aliases: ['local.cx', 'turnkey.local'],
      document_root: ''
    },
    { // Namaste
      host: 'stdev\.org',
      aliases: ['www\.stdev\.org'],
      document_root: '/stdev'
    },
  ],
};