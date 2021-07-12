import Head from 'next/head'
import Link from "next/link";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Wrapper = styled.div`
   background: #EEF5FF;
  min-height: 100vh;
  width: 100%;

`
const PostsWrapper = styled.div`
    display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
`
const Post = styled.a`

  position: relative;
  width: 350px;
  height: 270px;
  margin-top: 50px;
  cursor: pointer;

  background: url('${props => props.bgImage}') center / cover no-repeat;
  border-radius: 15px;
  :hover {
    transform: scale(1.1);
    transition: .3s all ease;
  }

`
const PostTitle = styled.div`
 
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  padding: 15px 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  border-radius: 0 0 15px 15px;

  color: #3260A1;


`

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>

      </Head>
        <Navbar/>
        <Wrapper>
           <div className="container">
               <PostsWrapper>
                 <Post bgImage={'./static/images/1.jpg'}>
                   <PostTitle>Мальдивы. Рай или пафос ? </PostTitle>
                 </Post>
                   <Post bgImage={'./static/images/2.jpg'}>
                       <PostTitle>Италия. Остров Капри. Обзор. </PostTitle>
                   </Post>
                   <Post bgImage={'./static/images/3.jpg'}>
                       <PostTitle>США. Сан-Франциско,  дорого ?</PostTitle>
                   </Post>
                   <Post bgImage={'./static/images/4.jpg'}>
                       <PostTitle>Канада. Пейзажи вблизи Онтарио.</PostTitle>
                   </Post>
                   <Post bgImage={'./static/images/5.jpg'}>
                       <PostTitle>Швейцария.  Красота природы.</PostTitle>
                   </Post>
                   <Post bgImage={'./static/images/6.jpg'}>
                       <PostTitle>Швейцария.  Красота природы.</PostTitle>
                   </Post>

               </PostsWrapper>
           </div>
        </Wrapper>

    </div>
  )
}
