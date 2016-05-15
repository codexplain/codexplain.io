module.exports = {
  options: {
    background: true,
  },
  server: {
    options: {
      files: [
        './client/*.html',
        './tmp/styles/*.css',
      ],
      server: {
        baseDir: [
          './client',
          './tmp',
        ],
      },
    },
  },
};
