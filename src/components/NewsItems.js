import React, { Component } from 'react'

export class NewsItems extends Component {
   /* const NewsItems =(props )=>{} , remove this.    and remove render() // this is used for function based components*/

    render() {
        let{title,description,imgUrl,newUrl,author,date} = this.props;


        return (
            <div classNmae="my-5 mx-5">
                <div className="card my-2 " >
                    <img src={!imgUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9UKo4MrvSXbbFCI2g_w4g-hGxSb0fRSRaw&usqp=CAU":imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className='text-danger'>By {!author?"unknown":author} on{date}</small></p>
                        <a href={newUrl}  target="/_blank" className="btn btn-sm  btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )

    }
}


export default NewsItems

