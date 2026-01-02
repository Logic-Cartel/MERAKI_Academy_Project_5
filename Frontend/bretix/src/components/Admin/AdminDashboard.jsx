import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Package,
  Settings,
  LogOut,
  TrendingUp,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import "./AdminDashboard.css";
import { useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  
  const menuItems = [
    { id: "overview", name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { id: "products", name: "Bretix Products", icon: <Package size={20} /> },
    { id: "users", name: "Users", icon: <Users size={20} /> },
    { id: "settings", name: "Settings", icon: <Settings size={20} /> },
  ];
  useEffect(() => {
    axios.get(` http://localhost:5000/users/`).then((result) => {
      setUsers(result.data.result);
      console.log(result);
    });
    axios.get(` http://localhost:5000/products/all`).then((result) => {
      setProducts(result.data.products);
      console.log(result.data.products);
    });
  }, []);
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">
            <Leaf size={24} />
          </div>
          <div className="logo-text">
            <h1>
              BRETIX <span>ECO</span>
            </h1>
            <p>Sustainability Suite</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-name">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="main-wrapper">
        <header className="main-header">
          <div className="header-title">
            <h2>{activeTab}</h2>
            <p>Welcome back, here's what's happening today.</p>
          </div>

          <div className="header-profile">
            <div className="profile-info">
              <p className="admin-name">Administrator</p>
              <p className="admin-status">Verified Account</p>
            </div>
            <div className="profile-avatar">
              AD
              <div className="online-indicator"></div>
            </div>
          </div>
        </header>

        <main className="content">
          {activeTab === "products" && (
            <div className="products-grid-container animate-fade-in">
              <div className="section-header">
                <div>
                  <h3>Eco-Products Catalog</h3>
                  <p className="subtitle">Manage your sustainable inventory</p>
                </div>
                <button className="add-product-btn">+ Add New Product</button>
              </div>

              <div className="products-grid">
                {products.map((product, i) => (
                  <div key={i} className="product-card">
                    <div className="product-image-wrapper">
                      <img src={product.imgsrc} alt={product.title} />
                      <div className="product-overlay">
                        <button className="view-details">Quick View</button>
                      </div>
                      {product.isEco && (
                        <span className="eco-badge">
                          <Leaf size={12} /> Eco
                        </span>
                      )}
                    </div>

                    <div className="product-info">
                      <h4 className="product-title">
                        {product.title || "Sustainable Item"}
                      </h4>
                      <div className="product-meta">
                        <span className="product-price">
                          ${product.price || "0.00"}
                        </span>
                        <span className="product-stock">
                          {product.stock || 0} in stock
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "users" && (
            <div className="users-section animate-fade-in">
              <div className="section-header">
                <h3>Eco-System Members</h3>
                <span className="user-count">{users.length} Active Users</span>
              </div>

              <div className="table-wrapper">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Location</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, i) => (
                      <tr key={user.id || i} className="table-row">
                        <td>
                          <div className="user-cell">
                            <div className="user-avatar-small">
                              {user.firstname.charAt(0)}
                              {user.lastname.charAt(0)}
                            </div>
                            <div>
                              <p className="user-full-name">
                                {user.firstname} {user.lastname}
                              </p>
                              <p className="user-email">ID: #{user.id}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="location-tag">
                            <Leaf size={14} className="text-green-500" />
                            {user.country}
                          </div>
                        </td>
                        <td>
                          <span className="status-badge">Active</span>
                        </td>
                        <td>
                          <button className="edit-btn">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <div className="stats-grid">
            <StatCard
              title="Total Sales"
              value="$12,450"
              change="+12.5%"
              icon={<TrendingUp size={20} />}
              type="emerald"
            />
            <StatCard
              title="Eco Projects"
              value="24"
              change="+2"
              icon={<Leaf size={20} />}
              type="green"
            />
            <StatCard
              title="Security Score"
              value="98%"
              change="Safe"
              icon={<ShieldCheck size={20} />}
              type="blue"
            />
          </div>

          <section className="activity-card">
            <div className="card-header">
              <h3>Recent Ecosystem Activity</h3>
              <button className="report-link">View Full Report</button>
            </div>
            <div className="card-body">
              <div className="loading-animation">
                <Package size={40} />
              </div>
              <p>
                Synchronizing with <strong>Bretix API</strong> nodes...
                <br />
                Fetching the latest eco-data.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, icon, type }) => (
  <div className={`stat-card ${type}`}>
    <div className="stat-header">
      <div className="stat-icon-wrapper">{icon}</div>
      <span className="stat-change">{change}</span>
    </div>
    <div className="stat-info">
      <p className="stat-label">{title}</p>
      <p className="stat-value">{value}</p>
    </div>
  </div>
);

export default AdminDashboard;
