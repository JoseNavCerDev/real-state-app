import {Dropzone} from 'dropzone';

const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

Dropzone.autoDiscover = false;

let myDropzone = new Dropzone("#my-form", {
  url: "/file/post", 
  dictDefaultMessage: 'Upload your images',
  acceptedFiles: '.png,.jpg,.jpeg',
  maxFilesize: 2,
  maxFiles: 1,
  parallelUploads: 1,
  autoProcessQueue: false,
  addRemoveLinks: true,
  headers:{
    'CSRF-Token': token
  } 
});

myDropzone.on("addedfile", file => {
  console.log(`File added: ${file.name}`);
});