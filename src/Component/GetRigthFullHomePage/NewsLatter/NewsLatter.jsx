import React from 'react';
import "./style.css"
function NewsLatter(props) {
    return (
        <section class="newsletter">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="content">
                        <form>
                            <h2 className='subscribeTitle'>SUBSCRIBE TO OUR NEWSLETTER</h2>
                            <div class="input-group">
                                <input type="email" class="form-control" placeholder="Enter your email"/>
                                <span class="input-group-btn">
                                    <button class="btn" type="submit">Subscribe Now</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default NewsLatter;