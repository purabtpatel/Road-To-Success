import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProfilePage = () => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <h1>ProfilePage</h1>
      <div class="container-xl px-4 mt-4">
        
        <nav class="nav nav-borders">

        </nav>
        <hr class="mt-0 mb-4"/>
        <div class="row">
            <div class="col-xl-4">
                
                <div class="card mb-4 mb-xl-0">
                    <div class="card-header">Profile Picture</div>
                    <div class="card-body text-center">
                        
                        <img class="img-account-profile rounded-circle mb-2" src="data:image/jpeg;base64,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" alt=""></img>
                        
                        <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                        
                        <button class="btn btn-primary" type="button">Upload new image</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                
                <div class="card mb-4">
                    <div class="card-header">Account Details</div>
                    <div class="card-body">
                        <form>
                           
                            <div class="mb-3">
                                <label class="small mb-1" for="inputUsername">Username </label>
                                <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username"/>
                            </div>
                            
                            <div class="row gx-3 mb-3">
                                
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputFirstName">First name</label>
                                    <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie"/>
                                </div>
                                
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputLastName">Last name</label>
                                    <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                                </div>
                            </div>
                          
                            <div class="row gx-3 mb-3">
                               
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputOrgName">Calendar Name</label>
                                    <input class="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value="Start Bootstrap"/>
                                </div>
                                
                            </div>
                           
                            <div class="mb-3">
                                <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com"/>
                            </div>

                            <div class="myselect">
                                    <select class="stick-Right" type = "upcoming-drop-Select-two" name="all-proxies" id="upcoming-drop-Select">
                                        <option value="Dark Theme">Dark Theme</option>
                                        <option value="Light Theme">Light Theme</option>
                                      </select>
                            </div>
                          
                           
                            
                            <button class="btn btn-primary" type="button">Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProfilePage
