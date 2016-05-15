module.exports = {
  options: {
    includePaths: ['./node_modules'],
  },
  server: {
    expand: true,
    cwd: './client/styles',
    src: '*.scss',
    dest: './tmp/styles',
    ext: '.css',
  },
};
