import React, { Component, PropTypes } from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { Upload, Icon, message, Modal } from 'antd';
const Dragger = Upload.Dragger;

@observer
export default class ImageWall extends Component {
    static defaultProps = {

    }

    state = {
        fileList: null,
    }

    @observable previewVisble = false
    @observable previewImage = ''

    handleFileUpload = ({fileList}) => {
        this.setState({fileList})
    }
    
    @action
    handlePreview = (file) => {
        this.previewImage = file.url || file.thumbUrl
        this.previewVisble = true
    }

    @action
    handleClose = () => {
        this.previewVisble = false
    }

    render() {
        return (
            <div className='clearfix'>
                <Dragger 
                    action='http://127.0.0.1:3000/upload'  
                    name='files'
                    multiple
                    listType="picture-card"
                    fileList={this.state.fileList}
                    onChange={this.handleFileUpload}
                    onPreview={this.handlePreview}
                >
                    <p className="drag-inbox-Icon">
                        <Icon type="inbox" />
                        Drag File Here
                    </p>
                </Dragger>
                <Modal visible={this.previewVisble} footer={null} onCancel={this.handleClose}>
                    <img src={this.previewImage} style={{width: '100%'}} alt="example"/>
                </Modal>
            </div>
        )
    }

}