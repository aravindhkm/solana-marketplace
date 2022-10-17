import React, { Component, Fragment, useState } from "react";
import { Container, Row, Col, Form, UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Modal, ModalHeader, ModalBody } from 'reactstrap';
import classnames from 'classnames';
import "./css/create.scss";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";

import fileImg from '../../assets/images/file-img.png';
import eth from '../../assets/images/eth.png';
import fishBanner from '../../assets/images/fishBanner.png';
import closeIcon from '../../assets/images/close-icon.png';


const Create = (props) => {	

	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);

	const [modal, setModal] = useState(false);
  	const toggle1 = () => setModal(!modal);

  	const [modal1, setModal1] = useState(false);
  	const toggle2 = () => setModal1(!modal1);
  
    return (
      <Fragment>
      	<Header />
        <section className="innerPagescnt">
        	<Container className="pb-5">
	        	<div className="about-section create-section">
	        		<Form>
				        <div className="row justify-content-center">
				          <div className="col-lg-12 col-sm-12 col-md-12">
				            <div className="middle-section-inner">
				              <h2>Create New Item</h2>
				            </div>
				          </div>
				          <div className="col-lg-6 col-sm-12 col-md-12">
				            <div className="drag-box">
				              <div className="row justify-content-center">
				                <div className="col-lg-3 col-sm-12 col-md-12">
				                  <div className="db-img">
				                    <img src={fileImg} />
				                  </div>
				                </div>
				                <div className="col-lg-9 col-sm-12 col-md-12">
				                  <p>Drage and Drop Your file</p>
				                  <p>,JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB </p>
				                  <p>or choose a file</p>
				                  <div className="fileUpload">
				                    <input type="file" className="upload" />
				                    <span>Browse Files</span>
				                  </div>
				                </div>
				              </div>
				            </div>
				          </div>
				          <div className="col-lg-6 col-sm-12 col-md-12">
				            <div className="drag-box-m">
				            	<div className="w-100">
									<label className="form-label">Name <span className="text-danger">*</span></label>
									<div className="drag-box-in"><input type="text" name="" placeholder="or choose a file" /></div>
						        </div>
						        <div className="w-100">
					              <label className="form-label">External Link</label>
					              <p>We will include a link to this URL on this item's detail page, so that users can click to learn more
					                about it. You are welcome to link to your own webpage with more details </p>
					              <div className="drag-box-in"><input type="text" name="" value="" placeholder="https://yoursite.io/item/132" />
					              </div>
					          	</div>
				            </div>
				          </div>
				          <div className="col-lg-6 col-sm-12 col-md-12">
				            <div className="drag-box-m">
				              <label className="form-label">Description</label>
				              <p>The description will be included on the item's detail page underneath its image. Markdown syntax is
				                supported</p>
				              <div className="drag-box-in">
				                <textarea name="" id="" cols="30" rows="5"
				                  placeholder="Provide a detailed description of your item"></textarea>
				              </div>
				            </div>
				          </div>
				          <div className="col-lg-6 col-sm-12 col-md-12">
				            <div className="drag-box-m">
				              <label className="form-label">Collection</label>
				              <p>This is the collection where your item will appear</p>
				              <div className="drag-box-in">
				                <select>
				                  <option selected="selected">Untitled Collection #108843832</option>
				                  <option>Untitled Collection #108843831</option>
				                </select>
				              </div>
				              <div className="drag-box-in">
				                <div className="drag-box-properties">
				                  <div className="db-left">
				                    <label className="form-label">Properties</label>
				                    <p>Textual traits that show up as rectangles</p>
				                  </div>
				                  <div className="db-right">
				                    <div className="dbr-plus"><a onClick={toggle2}><i className="fal fa-plus"></i></a></div>
				                    <Modal isOpen={modal1} toggle={toggle2} className="win-modal">
							          	<ModalHeader toggle={toggle2}>Add Properties</ModalHeader>
							            <ModalBody>
							                <p className="greyTxt mt-3 mb-4">Properties show up underneath your item, are clickable, and can be 
											filtered in your collection's sidebar</p>
							                <form>
							                	<div className="form-row">
							                		<div className="col-md-6">
							                			<div className="form-group">
							                				<label>Blockchain</label>
							                				<input type="text" className="form-control" placeholder="Character" />
							                			</div>
							                		</div>
							                		<div className="col-md-5">
							                			<div className="form-group">
							                				<label>Name</label>
							                				<input type="text" className="form-control" placeholder="Male" />
							                			</div>
							                		</div>
							                		<div className="col-md-1 d-flex justify-content-center align-items-end">
							                			<div className="form-group">
							                				<img src={closeIcon} className="mb-3 pointer" />
							                			</div>
							                		</div>
							                	</div>
							                	<div className="form-row mt-3">
							                		<div className="col-12">
							                			<button className="btn gradientOutlineBtn mr-2 py-2"><span>Add More</span></button>
							                			<button className="btn gradientBtn py-2"><span>Save</span></button>
							                		</div>
							                	</div>
							                </form>
							            </ModalBody>
							          </Modal>
				                  </div>
				                </div>
				              </div>
				            </div>
				          </div>
				          <div className="col-lg-6 col-sm-12 col-md-12">
				            <div className="drag-box-m">
				              <div className="drag-box-in">
				                <div className="drag-box-properties">
				                  <div className="db-left">
				                    <label className="form-label">Levels</label>
				                    <p>Numerical traits that show as a progress bar</p>
				                  </div>
				                  <div className="db-right">
				                    <div className="dbr-plus"><a href=""><i className="fal fa-plus"></i></a></div>
				                  </div>
				                </div>
				              </div>
				            </div>
				          </div>
				          <div className="col-lg-6 col-sm-12 col-md-12">
				            <div className="drag-box-m">
				              <div className="drag-box-in">
				                <div className="drag-box-properties">
				                  <div className="db-left">
				                    <label className="form-label">Stats</label>
				                    <p>Numerical traits that just show as numbers</p>
				                  </div>
				                  <div className="db-right">
				                    <div className="dbr-plus"><a href=""><i className="fal fa-plus"></i></a></div>
				                  </div>
				                </div>
				              </div>
				            </div>
				          </div>

				          <div className="col-lg-6 col-sm-12 col-md-12">
				            <div className="drag-box-m">
				              <div className="drag-box-in">
				                <div className="drag-box-properties">
				                  <div className="db-left">
				                    <label className="form-label">Unlockable Content</label>
				                    <p>Include unlockable content that can only be revealed by the owner of the item
				                    </p>
				                  </div>
				                  <div className="db-right">
				                    <label className="switch">
				                      <input type="checkbox" />
				                      <span className="slider round"></span>
				                    </label>
				                  </div>
				                </div>
				              </div>
				            </div>
				          </div>
				          <div className="col-lg-6 col-sm-12 col-md-12">
				            <div className="drag-box-m">
				              <div className="drag-box-in">
				                <div className="drag-box-properties">
				                  <div className="db-left">
				                    <label className="form-label">Explicit & Sensitive Content</label>
				                    <p>Set this item as explicit and sensitive content</p>
				                  </div>
				                  <div className="db-right">
				                    <label className="switch">
				                      <input type="checkbox" />
				                      <span className="slider round"></span>
				                    </label>
				                  </div>
				                </div>
				              </div>
				            </div>
				          </div>
				          <div className="col-lg-6 col-sm-12 col-md-12">
				            <div className="drag-box-m">
				              <label className="form-label">Supply</label>
				              <p>The number of copies that can be minted. No gas cost to you! Quantities above one coming soon</p>
				              <div className="drag-box-in"><input type="text" name="" value="" placeholder="1" /></div>
				            </div>
				          </div>
				          <div className="col-lg-6 col-sm-12 col-md-12">
				            <div className="drag-box-m">
				              <label className="form-label">Blockchain</label>

				              <div className="drag-box-in">
				              	<Dropdown isOpen={dropdownOpen} toggle={toggle}>
				                  <DropdownToggle data-toggle="dropdown" aria-expanded={dropdownOpen} className="nav-link toggleLink">
				                    <img src={eth} /> Etherium
				                  </DropdownToggle>
				                  <DropdownMenu>
				                    <li className="mb-2"><a onClick={toggle} className="dropdown-item"><img src={eth} /> Etherium</a></li>
				                    <li className="mb-2"><a onClick={toggle} className="dropdown-item"><img src={eth} /> Etherium</a></li>
				                  </DropdownMenu>
				                </Dropdown>
				              </div>
				            </div>
				          </div>
				          <div className="col-lg-6 col-sm-12 col-md-12">
				            <div className="drag-box-m">
				              <label className="form-label">Freeze metadata </label>
				              <p>Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage</p>
				              <div className="drag-box-in"><input type="text" name="" value="" placeholder="To freeze your metadata, you must create your item first" /></div>
				            </div>
				          </div>
				          <div className="col-lg-6 col-sm-12 col-md-12">
				             
				          </div>
				          <div className="col-lg-6 col-sm-12 col-md-12">
				            <div className="text-center"><a className="btn gradientBtn py-2" onClick={toggle1} >Create</a></div>     
				          </div>
				          <Modal isOpen={modal} toggle={toggle1} className="win-modal">
				          	<ModalHeader toggle={toggle1}>You Created Fish!</ModalHeader>
				            <ModalBody>
				                <p className="greyTxt text-center mt-3 mb-4">Woot! You just created Fish</p>
				                <div className="d-flex justify-content-center mb-3">
				                	<img src={fishBanner} className="popupBanner" />
				                </div>
				            </ModalBody>
				          </Modal>
				        </div>
			        </Form>
			    </div>
	        </Container>
        </section>
        
        <Footer />
      </Fragment>
    );
    
}

export default Create;