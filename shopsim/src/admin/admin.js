import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../store/actions/auth'
import {Link} from 'react-router-dom'

function Admin(props) {
  
    return (
        <div className="wrapper">
          <nav className="main-header navbar navbar-expand navbar-white navbar-light p-3">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" data-widget="pushmenu" to="#" role="button"><i className="fas fa-bars" /></Link>
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                <Link to="" className="nav-link">Home</Link>
              </li>
              <li className="nav-item d-none d-sm-inline-block">
                <Link to="#" className="nav-link">Contact</Link>
              </li>
            </ul>

          
            <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={props.logout}>
              <Link className="nav-link" to="#">
                  Đăng xuất
                  <i className="fas fa-sign-out-alt pl-2 pr-5"></i>        
              </Link>
            </li>
          </ul>
          
        
          </nav>
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
          
            <div className="sidebar">
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="info">
                  <Link to="#" className="d-block">Alexander Pierce</Link>
                </div>
              </div>
              <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
                  <li className="nav-item has-treeview">
                    <Link to="#" className="nav-link">
                      <i className="nav-icon fas fa-tachometer-alt" />
                      <p>
                        User
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="../../index.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v1</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="../../index2.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v2</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="../../index3.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v3</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item has-treeview">
                    <Link to="#" className="nav-link">
                      <i className="nav-icon fas fa-tachometer-alt" />
                      <p>
                        Quản lí bài viết
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="../../index.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v1</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="../../index2.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v2</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="../../index3.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v3</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item has-treeview">
                    <Link to="#" className="nav-link">
                      <i className="nav-icon fas fa-tachometer-alt" />
                      <p>
                        Quản lí sim
                        <i className="right fas fa-angle-left" />
                      </p>
                    </Link>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="../../index.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v1</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="../../index2.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v2</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="../../index3.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Dashboard v3</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
          <div className="content-wrapper">
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Fixed Navbar Layout</h1>
                  </div>
                </div>
              </div>
            </section>
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    {props.children}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
              <b>Version</b> 3.0.5
            </div>
            <strong>Copyright © 2014-2019 <Link to="http://adminlte.io">AdminLTE.io</Link>.</strong> All rights
            reserved.
          </footer>
          <aside className="control-sidebar control-sidebar-dark">
          </aside>
        </div>

    )
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout()),
  }
}

export default connect(null, mapDispatchToProps)(Admin);

