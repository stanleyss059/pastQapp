import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { 
  Bars3Icon, 
  XMarkIcon, 
  BookOpenIcon, 
  ArrowUpOnSquareIcon, 
  ChatBubbleLeftIcon, 
  DocumentIcon 
} from "@heroicons/react/24/solid";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [open, setOpen] = React.useState(false);
  
  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        <button
          className="menu-icon"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <XMarkIcon className="icon-o" />
          ) : (
            <Bars3Icon className="icon-o" />
          )}
        </button>
        <div className="logo">
          <Link to="#">LOGO</Link>
        </div>
      </div>
      
      {/* SIDEBAR */}
      {open && (
        <aside className="sidebar">
          <ul>
            <li>
              <Link to="/">
                <BookOpenIcon style={{width: 24, height: 24}} />
                Book Materials
              </Link>
            </li>
            <li>
              <Link to="/upload_Materials">
                <ArrowUpOnSquareIcon style={{width: 24, height: 24}} />
                Upload Materials
              </Link>
            </li>
            <li>
              <Link to="/discussion">
                <ChatBubbleLeftIcon style={{width: 24, height: 24}} />
                Discussion
              </Link>
            </li>
            <li>
              <Link to="/my_Uploads">
                <DocumentIcon style={{width: 24, height: 24}} />
                My Uploads
              </Link>
            </li>
          </ul>
        </aside>
      )}
      
      {/* PAGE CONTENT */}
      <main className="content">
        <Outlet />
      </main>
    </>
  );
}