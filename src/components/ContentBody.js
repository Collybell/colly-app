import React from 'react';
import banner from '../images/banner.jpg';
import CardList from './CardList';

const ContentBody = () => {
    return (
        <div className="contentflex">
            <div className="contentBanner">
               <h3>Content Banner</h3>
            </div>
            <div className="flex-card">
               <CardList
               card={{name:"A1"}} />
               <CardList 
               card={{name:"A2"}} />
               <CardList 
               card={{name:"A3"}} />
               <CardList 
               card={{name:"A4"}} />
               <CardList 
               card={{name:"A5"}} />
               <CardList 
               card={{name:"A6"}} />
           </div>
            <div className="card-blog" data-aos="fade-left">
               <div className="blog-img">
                   <img src={banner} alt=""/>
               </div>
               <div className="blog-text">
                   <p>Elit est quis irure cupidatat labore nulla. Aliqua pariatur irure velit laborum exercitation fugiat amet enim aute ut. Ea ea quis exercitation velit sit. Tempor dolor eiusmod proident nisi pariatur adipisicing amet cupidatat. Est dolor anim excepteur in consequat ut sunt incididunt ipsum.</p>
                   <p>Nulla et ullamco ipsum adipisicing deserunt. Laborum in eiusmod anim consequat nostrud dolor cillum consectetur tempor. Occaecat pariatur ea ipsum ipsum. Officia ea nostrud cupidatat culpa.</p>
                </div>
            </div>
            <div className="card-blog" data-aos="fade-right">
               <div className="blog-img">
                   <img src={banner} alt=""/>
               </div>
               <div className="blog-text">
                   <p>Elit est quis irure cupidatat labore nulla. Aliqua pariatur irure velit laborum exercitation fugiat amet enim aute ut. Ea ea quis exercitation velit sit. Tempor dolor eiusmod proident nisi pariatur adipisicing amet cupidatat. Est dolor anim excepteur in consequat ut sunt incididunt ipsum.</p>
                   <p>Nulla et ullamco ipsum adipisicing deserunt. Laborum in eiusmod anim consequat nostrud dolor cillum consectetur tempor. Occaecat pariatur ea ipsum ipsum. Officia ea nostrud cupidatat culpa.</p>
                </div>
            </div>
            <div className="card-blog" data-aos="fade-left">
               <div className="blog-img">
                   <img src={banner} alt=""/>
               </div>
               <div className="blog-text">
                   <p>Elit est quis irure cupidatat labore nulla. Aliqua pariatur irure velit laborum exercitation fugiat amet enim aute ut. Ea ea quis exercitation velit sit. Tempor dolor eiusmod proident nisi pariatur adipisicing amet cupidatat. Est dolor anim excepteur in consequat ut sunt incididunt ipsum.</p>
                   <p>Nulla et ullamco ipsum adipisicing deserunt. Laborum in eiusmod anim consequat nostrud dolor cillum consectetur tempor. Occaecat pariatur ea ipsum ipsum. Officia ea nostrud cupidatat culpa.</p>
                </div>
            </div>
            <div className="card-blog" data-aos="fade-right">
               <div className="blog-img">
                   <img src={banner} alt=""/>
               </div>
               <div className="blog-text">
                   <p>Elit est quis irure cupidatat labore nulla. Aliqua pariatur irure velit laborum exercitation fugiat amet enim aute ut. Ea ea quis exercitation velit sit. Tempor dolor eiusmod proident nisi pariatur adipisicing amet cupidatat. Est dolor anim excepteur in consequat ut sunt incididunt ipsum.</p>
                   <p>Nulla et ullamco ipsum adipisicing deserunt. Laborum in eiusmod anim consequat nostrud dolor cillum consectetur tempor. Occaecat pariatur ea ipsum ipsum. Officia ea nostrud cupidatat culpa.</p>
                </div>
            </div>
        </div>
    );
}

export default ContentBody;