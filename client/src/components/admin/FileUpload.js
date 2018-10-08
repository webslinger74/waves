import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';
import CircularProgress from '@material-ui/core/CircularProgress';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFiles:[],
            uploading:false
          }
    }
    onDrop = (files) => {
        this.setState({
            uploading:true
        })
        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append('file', files[0]);

        axios.post('/api/users/uploadimage', formData, config)
            .then(response => {

                console.log(response.data, "cloudinary response")
                this.setState({
                    uploading:false,
                    uploadedFiles:[
                        ...this.state.uploadedFiles,
                        response.data
                    ]
                },() => {
                    this.props.imagesHandler(this.state.uploadedFiles)
                })
            })
    }

    onRemove = (id) => {
        axios.get(`/api/users/removeimage?public_id=${id}`)
            .then((response) => {
                let images = this.state.uploadedFiles.filter((file) => {
                    return file.public_id !== id
                })
                this.setState({
                    uploadedFiles: images
                }, () => {
                    this.props.imagesHandler(images);
                })




            })
    }

    componentDidUpdate(prevProps){
            if(this.props.reset === true && this.props.reset !== prevProps.reset){
                    this.setState({
                        uploadedFiles:[]
                    },()=> {
                        console.log("has the state in fileupload gone back to []", this.state.uploadedFiles)
                    })
            }
    }

    showUploadedImages = (files)=> {
        console.log(files, "this is the files in show uploaded images");
      const ImgArr =  files.map((file) => ( 
                <div key={file.public_id} 
                    className="dropzone_box"
                    onClick={() => this.onRemove(file.public_id)}>
                    <div className="wrap"
                    style={{background:`url(${file.url}) no-repeat`}}>
                    </div>
                </div>  
        ))
        console.log(ImgArr, "imgarr")
        return ImgArr;
    }

    render() { 
        return (
            <div>
                <section>
                    <div className="dropzone clear">
                        <Dropzone
                        onDrop={(e) => this.onDrop(e)}
                        multiple={false}
                        className="dropzone_box"
                        >
                        <div className="wrap">
                            <FontAwesomeIcon
                            icon={faPlusCircle}
                            />
                        </div>
                        </Dropzone>
                        {this.showUploadedImages(this.state.uploadedFiles)}
                        {
                            this.state.uploading ? 
                                <div className="dropzone_box" style={{
                                    textAlign: 'center',
                                    paddingTop: '60px'
                                }}>
                                <CircularProgress 
                                style={{color:'#00bcd4'}}
                                thickness={7}
                                />
                                </div>
                            :null
                        }
                    </div>


                </section>


            </div>

          );
    }
}
 
export default FileUpload;