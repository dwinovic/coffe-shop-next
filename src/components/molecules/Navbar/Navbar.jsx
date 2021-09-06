import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  IC_Logo as logo,
  IC_List as listIcon,
  IC_Search,
  IC_Message,
} from '../../../assets/icons';
import { useState } from 'react';
import style from './navbar.module.css';
import styled from 'styled-components';
import { IMG_AvatarDefault } from '../../../assets';
import { Breakpoints } from '../../../utils';
import { LogoBrand } from '../../atoms';

const Navbar = (props) => {
  const [show, setShow] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const router = useRouter();
  const formatUrl = ([first, ...last]) => {
    return first.toUpperCase() + last.join('');
  };
  return (
    <>
      <Head>
        {router.route.split('/')[1] === '' && <title>Coffe-Shoop | Home</title>}
        {router.route.split('/')[1] !== '' && (
          <title>Coffe-Shoop | {formatUrl(router.route.split('/')[1])}</title>
        )}
      </Head>
      <div className={style.navbar}>
        <div className={`${style['navbar-container']} container`}>
          <div className={style['navbar-menu-left']}>
            <LogoBrand click />
          </div>
          {/* <div className={style['navbar-menu-left']}>
            <Image src={logo} width="25px" height="25px" alt="icon-logo" />
            <p className={style['navbar-text-brand']}>Coffee Shop</p>
          </div> */}
          <div className={style['button-show-hide-navbar']}>
            <button
              onClick={() => setShow(!show)}
              className={style['btn-navbar']}
            >
              <Image src={listIcon} alt="icon-list" />
            </button>
          </div>
          <div
            className={`${style['navbar-menu-right']} ${
              show ? style['show-navbar'] : ''
            }`}
          >
            <ul className={style['navbar-menu']}>
              <li className={`${style['li-menu']}`}>
                <Link href="/">
                  <a
                    className={`${style['li-menu-a']} ${
                      router.pathname === '/' ? style['li-menu-a-active'] : ''
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className={`${style['li-menu']}`}>
                <Link href="/products">
                  <a
                    className={`${style['li-menu-a']} ${
                      router.pathname === '/products'
                        ? style['li-menu-a-active']
                        : ''
                    }`}
                  >
                    Product
                  </a>
                </Link>
              </li>
              <li className={`${style['li-menu']}`}>
                <Link href={props?.role === 'customer' ? '/carts' : '/orders'}>
                  <a
                    className={`${style['li-menu-a']} ${
                      router.pathname === '/cart'
                        ? style['li-menu-a-active']
                        : ''
                    }`}
                  >
                    {props?.role === 'customer' ? 'Your Cart' : 'Orders'}
                  </a>
                </Link>
              </li>
              <li className={`${style['li-menu']}`}>
                <Link
                  href={props?.role === 'customer' ? '/history' : '/dashboard'}
                >
                  <a
                    className={`${style['li-menu-a']} ${
                      router.pathname === '/history'
                        ? style['li-menu-a-active']
                        : ''
                    }`}
                  >
                    {props?.role === 'customer' ? 'History' : 'Dashboard'}
                  </a>
                </Link>
              </li>
              {/* User belum login */}
              {false && (
                <>
                  <li className="li-menu">
                    <button
                      onClick={() => router.push('/auth/login')}
                      className={`${style['btn-white']}`}
                    >
                      Login
                    </button>
                  </li>
                  <li className="li-menu">
                    <button
                      onClick={() => router.push('/auth/register')}
                      className={style['btn-orange']}
                    >
                      Register
                    </button>
                  </li>
                </>
              )}
              {/* User sudah login */}
              {true && (
                <AuthProfile>
                  <div className="btn">
                    <Image src={IC_Search} alt="icon" layout="fill" />
                  </div>
                  <div className="btn">
                    <Image src={IC_Message} alt="icon" layout="fill" />
                    <div className="notification">1</div>
                  </div>
                  <div className="btn avatar-wrapper">
                    <Image
                      src={IMG_AvatarDefault}
                      alt="username"
                      layout="fill"
                      onClick={() =>
                        showPopover
                          ? setShowPopover(false)
                          : setShowPopover(true)
                      }
                    />
                    {showPopover && (
                      <div className="popover">
                        <Link href="/profile">
                          <a>Edit Profile</a>
                        </Link>
                        <Link href="/auth/login">
                          <a>Logout</a>
                        </Link>
                      </div>
                    )}
                  </div>
                </AuthProfile>
              )}
              {props.menu}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

const AuthProfile = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-left: 24px;
  ${Breakpoints.lessThan('md')`
      justify-content: space-around; 
      margin-top: 1rem; 
  `}
  .btn {
    position: relative;
    width: 34px;
    height: 34px;

    &.avatar-wrapper {
      position: relative;
      border: 3px solid #6a4029;
      border-radius: 100%;
      img {
        object-fit: contain;
        border-radius: 100%;
        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
      .popover {
        background-color: #ffffff;
        box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
        position: absolute;
        right: 0;
        top: 50px;
        padding: 12px 20px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: max-content;
        a:hover {
          cursor: pointer;
          opacity: 0.5;
        }
      }
    }
    .notification {
      width: 20px;
      height: 20px;
      background: #6a4029;
      border-radius: 100%;
      color: #ffffff;
      font-size: 14px;
      text-align: center;
      font-weight: 500;
      position: absolute;
      left: -10px;
      top: -8px;
    }
  }
`;
