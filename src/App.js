import logo from "./logo.svg";
import "./App.css";
// get our fontawesome imports
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function App() {
  return (
    <div>
      <div></div>
      <div class="navbar">
        <a class="active" href="#">
          <h2>Welcome Katie!</h2>
        </a>

        <a href="#">
          <div className="logo">
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: 20, marginTop: 8 }}
            />
           
          </div>
        </a>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <Card className="card">
              <Card.Body>
                <Card.Title className="text-center">
                  Subscriber Management
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  Manage hospitals and subscriptions
                </Card.Subtitle>

                <button className="btn btn-lg " id="button">
                  View More <i class="arrow right"></i>{" "}
                </button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm-4">
            <Card className="card">
              <Card.Body>
                <Card.Title className="text-center">
                  Manage Subscription Plans
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  Add or edit subscription plans
                </Card.Subtitle>

                <button className="btn btn-lg " id="button">
                  View More <i class="arrow right"></i>{" "}
                </button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm-4">
            <Card className="card">
              <Card.Body>
                <Card.Title className="text-center">User Management</Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  Manage CLOC app users
                </Card.Subtitle>

                <button className="btn btn-lg " id="button">
                  View More <i class="arrow right"></i>{" "}
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div class="container" style={{ marginTop: 50 }}>
        <div class="row">
          <div class="col-sm-4">
            <Card className="card">
              <Card.Body>
                <Card.Title className="text-center">
                  Content Management
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  add and update content on the app
                </Card.Subtitle>

                <button className="btn btn-lg " id="button">
                  View More <i class="arrow right"></i>{" "}
                </button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm-4">
            <Card className="card">
              <Card.Body>
                <Card.Title className="text-center">
                  Content Awaiting Approval
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  Approve submissions by users
                </Card.Subtitle>

                <button className="btn btn-lg " id="button">
                  View More <i class="arrow right"></i>{" "}
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
