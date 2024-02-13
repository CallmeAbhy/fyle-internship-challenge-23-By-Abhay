import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService, GitHubUser, GitHubRepository } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user data', () => {
    const username = 'CallmeAbhy';
    const mockUser: GitHubUser = {
      name: 'Abhay Hitendra Dusane',
      bio: 'Front End Developer | Problem Solver | Lifelong Learner ',
      location: 'Pune',
      linkedin_username: 'abhaydusane',
      html_url: 'https://github.com/CallmeAbhy',
      avatar_url: 'https://avatars.githubusercontent.com/u/99988396?v=4',
      public_repos: 41,
      followers: 0,
      following : 1
    };

    service.getUser(username).subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpTestingController.expectOne(`https://api.github.com/users/${username}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockUser);
  });

  it('should get repositories', () => {
    const username = 'testUser';
    const currentPage = 1;
    const reposPerPage = 10;
    const mockRepos: GitHubRepository[] = [
      { id: 1, name: 'Repo1', description: 'Description1', topics: ['Topic1'], html_url: 'Repo1Url' },
    ];

    service.getRepos(username, currentPage, reposPerPage).subscribe((repos) => {
      expect(repos).toEqual(mockRepos);
    });

    const req = httpTestingController.expectOne(
      `https://api.github.com/users/${username}/repos?page=${currentPage}&per_page=${reposPerPage}`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockRepos);
  });

  it('should set user data', () => {
    const mockUser: GitHubUser = {
      name: 'John Doe',
      bio: 'Some bio',
      location: 'Some location',
      linkedin_username: 'linkedinHandle',
      html_url: 'https://github.com/johndoe',
      avatar_url: 'https://github.com/johndoe/avatar',
      public_repos: 10,
      followers: 5,
      following : 5
    };

    service.setUserData(mockUser);

    service.getUserData().subscribe((user) => {
      expect(user).toEqual(mockUser);
    });
  });

  it('should get repositories count', () => {
    const reposCount = 5;
    const mockUser: GitHubUser = {
      name: 'John Doe',
      bio: 'Some bio',
      location: 'Some location',
      linkedin_username: 'linkedinHandle',
      html_url: 'https://github.com/johndoe',
      avatar_url: 'https://github.com/johndoe/avatar',
      public_repos: reposCount,
      followers: 31,
      following : 0
    };
  
    service.getUserData().subscribe(() => {
      service.getReposCount().subscribe((count) => {
        expect(count).toEqual(reposCount);
      });
    });
  
    service.setUserData(mockUser);
  });

  it('should get error404 status with default', () => {
    service.getError404Status().subscribe((status) => {
      expect(status).toEqual(false);
    });
  });
  
  it('should set and get error404 status', () => {
    const mockStatus = true;
  
    service.setError404Status(mockStatus);
  
    service.getError404Status().subscribe((status) => {
      expect(status).toEqual(mockStatus);
    });
  });
});
