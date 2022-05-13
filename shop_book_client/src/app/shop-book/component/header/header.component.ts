import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../service/token-storage.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   roles: string[]=[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username!: string;
  // listPost :PostDetails[];
  content: any;
  constructor(private userService:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
    
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }

  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
//  public searchPost(key:string):void{
//    const result:PostDetails[]=[];
//    for(const post of this.listPost){
//      if(post.bookName.toLowerCase().indexOf(key.toLowerCase())!==-1
//      ||post.user.toLowerCase().indexOf(key.toLowerCase())!==-1
//      ||post.category.toLowerCase().indexOf(key.toLowerCase())!==-1
//     ){
//       result.push(post);
//     }
//    }
//    this.listPost=result;
//    if(result.length===0 ||!key){
//      this.postDetailService.getPostDetail();
//    }
//  }

}
