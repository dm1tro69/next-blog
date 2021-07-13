import React from 'react';
import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.div`
    background: #EEF5FF;
  min-height: 100vh;
  min-width: 100%;
`

const BackBtn = styled.a`
 

  background: #FFFFFF;
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 30px;
  outline: none;
  height: 45px;
  width: 117px;
  :hover {
    box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);

  }

`

const FormWrapper = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
`
const Form = styled.form`
  
  max-width: 500px;
  width: 100%;
  padding: 30px;
  background: #FFFFFF;
  border-radius: 15px;

`
const InputField = styled.div`
    display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
const Input = styled.input`
    width: 100%;
  display: flex;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
`
const TextLabel = styled.div`
    font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 5px;
  color: #222222;
`
const TextArea = styled.textarea`
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 5px;
  min-height: 150px;
  resize: none;
  outline: none;
  padding: 5px 10px;
  margin-bottom: 5px;
`
const FormBtn = styled.button`
    width: 139px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  background: #67BFFF;
  border-radius: 10px;
  border: none;
  margin: 0 auto;
 cursor: pointer;
;
`

const AddPost = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>

            </Head>
            <Wrapper>
                <Navbar/>
                <div className="container">
                   <Link href="/">
                       <BackBtn>
                           <Image
                               src="/static/images/Vector.svg"
                               alt="Picture of the author"
                               width={24}
                               height={15}
                           />
                           Назад
                       </BackBtn>
                   </Link>
                    <FormWrapper>
                        <Form>
                          <InputField>
                              <TextLabel>
                                  Название статьи:
                              </TextLabel>
                              <Input/>
                          </InputField>
                            <InputField>
                                <TextLabel>
                                    Текст статьи:
                                </TextLabel>
                                <TextArea/>
                            </InputField>
                            <InputField>
                                <TextLabel>
                                    URL картинки:
                                </TextLabel>
                                <Input/>
                            </InputField>
                            <FormBtn>Добавить</FormBtn>
                        </Form>
                    </FormWrapper>

                </div>

            </Wrapper>
        </>
    );
};

export default AddPost;
