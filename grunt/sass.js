module.exports = {
  options: {
    includePaths: ['./node_modules'],
  },
  dist: {
    expand: true,
    cwd: './client/styles',
    src: '*.scss',
    dest: './dist/styles',
    ext: '.css',
  },
  server: {
    expand: true,
    cwd: './client/styles',
    src: '*.scss',
    dest: './tmp/styles',
    ext: '.css',
  },
};
