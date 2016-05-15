module.exports = {
  dist: {
    files: [
      {
        expand: true,
        cwd: './client',
        src: '*.{png,html,txt}',
        dest: './dist',
      }, {
        src: './client/CNAME',
        dest: './dist/CNAME',
      }, {
        expand: true,
        cwd: './client/images',
        src: '*.svg',
        dest: './dist/images',
      },
    ],
  },
};
