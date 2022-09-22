import {Dropzone} from 'dropzone';

const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

//Dropzone.autoDiscover = false;

Dropzone.options.imagesForm =  {
  //url: "/file/post", 
  dictDefaultMessage: 'Upload your images',
  acceptedFiles: '.png,.jpg,.jpeg',
  maxFilesize: 2,
  maxFiles: 1,
  parallelUploads: 1,
  autoProcessQueue: false,
  addRemoveLinks: true,
  headers:{
    'CSRF-Token': token
  },
  paramName: 'image',
  init: function(){
    const dropzone = this;
    const publishButton = document.querySelector('#publishButton');

    publishButton.addEventListener('click', function(){
      dropzone.processQueue();
    })

    dropzone.on('queuecomplete', function() {
      if(dropzone.getActiveFiles().length === 0){
        window.location.href = '/api/properties/my-properties'
      }
    })
  }
};