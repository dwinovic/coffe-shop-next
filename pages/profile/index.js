import styled from 'styled-components';
import { Breakpoints } from '../../src/utils';
import PrivateRoute from '../../src/components/hoc/PrivateRoute';
import { Button } from '../../src/components/atoms';
import { IMG_AvatarDefault } from '../../src/assets/images';
import Image from 'next/image';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const ProfileUser = () => {
  const [users, setUsers] = useState({
    image: null,
    name: 'Joko Santoso Purwo',
    email: 'joko@gmail.com',
    address: 'Jakarta Barat Daya',
    phone: '089656533654',
    born: '20 Agustus 2000',
    gender: 'male',
  });

  const [previewImage, setPreviewImage] = useState(users.image);
  // START = HANDLE PRIVIEW IMAGE
  const handlePreviewImage = (e) => {
    setPreviewImage(e.target.files[0]);
  };
  // END = HANDLE PRIVIEW IMAGE

  // START = VALIDATION FORM
  const validate = Yup.object({
    address: Yup.string().required('Address is required'),
    phone: Yup.string().required('Phone is required'),
    size: Yup.string().required('Size is required'),
    method: Yup.string().required('Method payment is required'),
    category: Yup.string().required('Category is required'),
  });
  // END = VALIDATION FORM

  return (
    <StyledProfileUserPage>
      <div className="container">
        <Formik
          initialValues={{
            name: 'COLD BREW',
            price: 1000,
            description:
              'Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.',
            size: '',
            method: '',
            category: '',
          }}
          validationSchema={validate}
          onSubmit={(values, { resetForm }) => {
            // const image = priviewImage ? priviewImage : defaultImage;

            // if (!image) {
            //   return Toastify('Images required!', 'error');
            // }

            // const formData = new FormData();
            // formData.append('product_name', values.name);
            // formData.append('price', values.price);
            // formData.append('category_id', values.category);
            // formData.append('description', values.description);
            // formData.append('stock', stockCounter);
            // formData.append('delivery_id', values.method);
            // formData.append('size_id', values.size);
            // formData.append('img_product', image);

            // const checkDataSend = {
            //   product_name: values.name,
            //   price: values.price,
            //   category_id: values.category,
            //   description: values.description,
            //   stock: stockCounter,
            //   delivery_id: values.method,
            //   size_id: values.size,
            //   img_product: image,
            // };
            // console.log('checkDataSend:', checkDataSend);

            resetForm();
          }}
        >
          {(formik) => (
            <Form>
              <h1 className="heading-page">User Profile</h1>
              <div className="body-top">
                <div className="top-left">
                  <div className="avatar-wrapper">
                    {!previewImage && (
                      <Image
                        src={IMG_AvatarDefault}
                        alt="image name"
                        layout="fill"
                      />
                    )}
                    {previewImage && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={URL?.createObjectURL(previewImage)} alt="" />
                    )}
                    {previewImage && (
                      <div
                        className="edit delete"
                        onClick={() => {
                          setPreviewImage(false);
                        }}
                      >
                        <svg
                          width="23"
                          height="24"
                          viewBox="0 0 23 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 6H4.11111M4.11111 6H21M4.11111 6V20C4.11111 20.5304 4.33353 21.0391 4.72944 21.4142C5.12535 21.7893 5.66232 22 6.22222 22H16.7778C17.3377 22 17.8746 21.7893 18.2706 21.4142C18.6665 21.0391 18.8889 20.5304 18.8889 20V6H4.11111ZM7.27778 6V4C7.27778 3.46957 7.5002 2.96086 7.89611 2.58579C8.29202 2.21071 8.82899 2 9.38889 2H13.6111C14.171 2 14.708 2.21071 15.1039 2.58579C15.4998 2.96086 15.7222 3.46957 15.7222 4V6M9.38889 11V17M13.6111 11V17"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                    {!previewImage && (
                      <div className="edit upload">
                        <svg
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0779 1.54314C10.2368 1.37094 10.4255 1.23435 10.6332 1.14116C10.8409 1.04796 11.0635 1 11.2883 1C11.513 1 11.7356 1.04796 11.9433 1.14116C12.151 1.23435 12.3397 1.37094 12.4986 1.54314C12.6576 1.71533 12.7837 1.91976 12.8697 2.14474C12.9557 2.36973 13 2.61086 13 2.85439C13 3.09791 12.9557 3.33904 12.8697 3.56403C12.7837 3.78901 12.6576 3.99344 12.4986 4.16563L4.32855 13.0166L1 14L1.90779 10.3941L10.0779 1.54314Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <input
                          type="file"
                          onChange={(e) => handlePreviewImage(e)}
                        />
                      </div>
                    )}
                  </div>
                  <h3 className="heading-username">{users.name}</h3>
                  <h4>{users.email}</h4> <br />
                  <br />
                  {/* <h5>Has been ordered 15 products</h5> */}
                </div>
                <div className="top-right">
                  <div className="top">
                    <h1>Contact</h1>
                    <button className="edit">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6168 1.8356C14.8552 1.57068 15.1383 1.36054 15.4498 1.21716C15.7613 1.07379 16.0952 1 16.4324 1C16.7696 1 17.1035 1.07379 17.415 1.21716C17.7265 1.36054 18.0095 1.57068 18.248 1.8356C18.4864 2.10051 18.6755 2.41501 18.8046 2.76114C18.9336 3.10727 19 3.47825 19 3.8529C19 4.22755 18.9336 4.59853 18.8046 4.94466C18.6755 5.29079 18.4864 5.60529 18.248 5.87021L5.99283 19.487L1 21L2.36168 15.4524L14.6168 1.8356Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="body">
                    <div className="body-left">
                      <div className="left-top">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="email" placeholder="Email" />
                      </div>
                      <div className="left-bottom">
                        <label>Delivery Address</label>
                        <input type="text" placeholder="Delivery address" />
                      </div>
                    </div>

                    <div className="body-right">
                      <div className="right-top">
                        <label>Mobile number</label>
                        <input type="text" placeholder="Mobile number" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="body-bottom">
                <div className="bottom-left">
                  <div className="top">
                    <h1>Details</h1>
                    <button className="edit-detail">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6168 1.8356C14.8552 1.57068 15.1383 1.36054 15.4498 1.21716C15.7613 1.07379 16.0952 1 16.4324 1C16.7696 1 17.1035 1.07379 17.415 1.21716C17.7265 1.36054 18.0095 1.57068 18.248 1.8356C18.4864 2.10051 18.6755 2.41501 18.8046 2.76114C18.9336 3.10727 19 3.47825 19 3.8529C19 4.22755 18.9336 4.59853 18.8046 4.94466C18.6755 5.29079 18.4864 5.60529 18.248 5.87021L5.99283 19.487L1 21L2.36168 15.4524L14.6168 1.8356Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="body">
                    <div className="body-left">
                      <div className="left-top">
                        <p>Display name</p>
                        <input type="text" placeholder="Display name" />
                      </div>
                      <div className="left-top">
                        <p>First name</p>
                        <input type="text" placeholder="First name" />
                      </div>
                      <div className="left-bottom">
                        <p>Last name</p>
                        <input type="text" placeholder="last name" />
                      </div>
                    </div>

                    <div className="body-right">
                      <div className="right-top">
                        <p>DD / MM / YY</p>
                        <input type="text" placeholder="DD/MM/YY" />
                      </div>
                      <div className="right-bottom">
                        <div className="male">
                          <input type="radio" value="male" name="gender" /> Male
                        </div>
                        <div className="female">
                          <input type="radio" value="female" name="gender" />{' '}
                          Female
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-right">
                  <p>Do you want to save the</p>
                  <p>change?</p>
                  <Button className="save">Save</Button>
                  <Button className="cancel">Cancel</Button>
                  {/* <Button className="edit-password">Edit Password <span> > </span> </Button> */}
                  {/* <Button className="logout">Log Out <span> > </span> </Button> */}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </StyledProfileUserPage>
  );
};

export default PrivateRoute(ProfileUser);

// START === STYLING CURRENT PAGE

const StyledProfileUserPage = styled.div`
  /* START == BREAKPOINT */
  /* ${Breakpoints.lessThan('2xl')`
      background-color: yellow;
    `}
  ${Breakpoints.lessThan('xl')`
      background-color: blue;
    `}
    ${Breakpoints.lessThan('lg')`
      background-color: cyan;
    `}
    ${Breakpoints.lessThan('md')`
      background-color: pink;
    `}
    ${Breakpoints.lessThan('sm')`
      background-color: green;
    `}
    ${Breakpoints.lessThan('xsm')`
      background-color: pink;
    `} */
  background-image: url('IMG_BodyProfile.png');
  background-position: center;

  .container {
    /* width: 100%; */
    /* height: 100%; */
    /* padding-left: 5%; */
    /* padding-right: 5%; */
    padding-top: 125px;
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* background-repeat: no-repeat; */
    background-size: cover;
    padding-bottom: 80px;
    h1.heading-page {
      font-size: 40px;
      color: white;
      font-weight: bolder;
      margin-bottom: 25px;
    }
    .body-top {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 400px;
      margin-bottom: 100px;
      gap: 23px;
      ${Breakpoints.lessThan('md')` 
        flex-direction: column; 
        height: max-content;
      `}
      ${Breakpoints.lessThan('xsm')`
        margin-bottom: 26px; 
      `}
      .top-left {
        width: 30%;
        height: 100%;
        border-radius: 15px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        ${Breakpoints.lessThan('md')` 
          width: 100%;
          padding: 16px 0;
        `}
        .avatar-wrapper {
          width: 200px;
          height: 200px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 100%;
            margin-bottom: 20px;
          }
          .edit {
            position: absolute;
            bottom: 10px;
            right: 10px;
            input {
              width: 100%;
              height: 100%;
              position: absolute;
              opacity: 0;
            }
          }
        }
        h3.heading-username {
          font-size: 26px;
          max-width: 200px;
          text-align: center;
          margin: 16px 0;
          font-weight: bolder;
        }
        h4 {
          font-size: 15px;
          font-weight: light;
        }
        h5 {
          font-size: 15px;
          color: gray;
        }
      }
      .top-right {
        flex: 1;
        height: 100%;
        border-radius: 15px;
        background-color: white;
        ${Breakpoints.lessThan('md')` 
          padding-bottom: 26px;
        `}

        .top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 30px;
          padding: 20px;
          h1 {
            color: black;
            font-size: 30px;
          }
        }

        .body {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          ${Breakpoints.lessThan('xsm')`
            flex-direction: column;
          `}
          .body-left {
            width: 100%;
            display: flex;
            flex-direction: column;

            .left-top {
              display: flex;
              flex-direction: column;
              margin-bottom: 50px;
              ${Breakpoints.lessThan('xsm')`
                margin-bottom: 16px;
              `}
              padding-left: 20px;
              label {
                font-weight: bolder;
                color: black;
                font-size: 20px;
              }
              input {
                height: 40px;
                width: 90%;
                outline: none;
                border: none;
                border-bottom: 2px solid black;
              }
            }

            .left-bottom {
              display: flex;
              flex-direction: column;
              padding-left: 20px;
              ${Breakpoints.lessThan('xsm')`
                margin-bottom: 16px;
              `}
              label {
                font-weight: bolder;
                color: black;
                font-size: 20px;
              }

              input {
                height: 40px;
                width: 90%;
                outline: none;
                border: none;
                border-bottom: 2px solid black;
              }
            }
          }

          .body-right {
            width: 100%;
            display: flex;
            flex-direction: column;

            .right-top {
              display: flex;
              flex-direction: column;
              margin-bottom: 50px;
              padding-left: 20px;
              label {
                font-weight: bolder;
                color: black;
                font-size: 20px;
              }
              input {
                height: 40px;
                width: 90%;
                outline: none;
                border: none;
                border-bottom: 2px solid black;
              }
            }
          }
        }
      }
    }
    .body-bottom {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 500px;
      ${Breakpoints.lessThan('lg')` 
        height: max-content;
      `}
      ${Breakpoints.lessThan('md')` 
        flex-direction: column;
      `}
      .bottom-left {
        width: 60%;
        height: 100%;
        border-radius: 15px;
        background-color: white;
        margin-right: 10%;
        ${Breakpoints.lessThan('md')` 
          width: 100%;
        `}
        .top {
          width: 98%;
          display: flex;
          flex-direction: row;
          margin-bottom: 30px;
          padding: 20px;
          justify-content: space-between;
          h1 {
            color: black;
            font-size: 30px;
          }

          .edit-detail {
            width: 40px;
            height: 40px;
            border-radius: 100%;
            border: none;
            background: #6a4029;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            color: #6a4029;

            img {
              object-fit: scale-down;
            }
          }
        }

        .body {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          ${Breakpoints.lessThan('lg')`
            flex-direction: column;
            margin-bottom: 20px;
          `}
          .body-left {
            width: 100%;
            display: flex;
            flex-direction: column;

            .left-top {
              display: flex;
              flex-direction: column;
              margin-bottom: 50px;
              padding-left: 20px;

              p {
                font-weight: bolder;
                color: black;
                font-size: 20px;
              }

              input {
                height: 40px;
                width: 90%;
                outline: none;
                border: none;
                border-bottom: 2px solid black;
              }
            }

            .left-bottom {
              display: flex;
              flex-direction: column;
              padding-left: 20px;

              p {
                font-weight: bolder;
                color: black;
                font-size: 20px;
              }

              input {
                height: 40px;
                width: 90%;
                outline: none;
                border: none;
                border-bottom: 2px solid black;
              }
            }
          }

          .body-right {
            width: 100%;
            display: flex;
            flex-direction: column;

            .right-top {
              display: flex;
              flex-direction: column;
              margin-bottom: 50px;
              padding-left: 20px;

              p {
                font-weight: bolder;
                color: black;
                font-size: 20px;
              }

              input {
                height: 40px;
                width: 90%;
                outline: none;
                border: none;
                border-bottom: 2px solid black;
              }
            }

            .right-bottom {
              padding-left: 20px;

              input [type='radio'] {
                font-size: 20px;
              }
            }
          }
        }
      }

      .bottom-right {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        ${Breakpoints.lessThan('md')` 
          width: 100%; 
          margin-top: 50px;
        `}
        p {
          font-size: 30px;
          color: white;
          font-weight: bolder;
          margin-bottom: 20px;
        }

        .save {
          background-color: #6a4029;
          color: white;
          margin-bottom: 20px;
        }

        .cancel {
          margin-bottom: 20px;
        }

        .edit-password {
          color: #6a4029;
          background-color: white;
          margin-bottom: 20px;
          text-align: left;
          padding-left: 20px;

          span {
            margin-left: 55%;
          }
        }

        .logout {
          color: #6a4029;
          background-color: white;
          margin-bottom: 20px;
          text-align: left;
          padding-left: 20px;

          span {
            margin-left: 55%;
          }
        }
      }
    }
    /* GLOBAL STYLING IN CURRENT PAGE */
    /* Button Edit */
    .edit {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      border: none;
      background: #6a4029;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #6a4029;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const BodyWrapper = styled.div``;
