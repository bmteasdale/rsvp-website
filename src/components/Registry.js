import React from 'react';

function Registry() {
    return (
        <div id="registry">
            <h1 className="registry-header-1">Our Wedding Registry</h1>
            <div className="row">
                <div className="col-lg-6">
                    <a href="https://www.bedbathandbeyond.ca/store/giftregistry/registry-search-guest?q=Mallory%20Berkvens&fq=&scrollTop=false&rows=10&start=0&searchMode=byName"><img src={require("../assets/bedbathbeyondlogo.png")} className="registry-img" alt="registry1"/></a>
                </div>
                <div className="col-lg-6">
                    <h3 className="align-left registry-desc"><strong>Need a gift idea?</strong></h3>
                    <p className="align-left registry-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in purus ut lacus vestibulum eleifend non a felis. Nulla id fringilla ante, et lacinia diam. Duis egestas leo vel ullamcorper cursus. Praesent consectetur, diam sed laoreet venenatis, arcu nibh pharetra ex, at fermentum eros eros sit amet augue. Nunc vehicula auctor dolor eget consequat. Aliquam vitae viverra metus, vitae vulputate quam. Integer et magna leo. Praesent vestibulum mi eu vulputate venenatis. Praesent dignissim et mauris vel interdum. Vivamus pellentesque arcu sed sapien finibus, vel accumsan nunc porttitor. In consectetur vitae felis vel hendrerit. Sed quis tincidunt dolor.</p>
                </div>
            </div>
        </div>
    )
}

export default Registry
