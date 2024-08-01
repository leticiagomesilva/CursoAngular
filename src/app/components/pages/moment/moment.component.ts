 import { MomentService } from './../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Moment } from './../../../Moment';
import { Comment } from '../../../Comment';
import { CommentService } from '../../../services/comment.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent {

  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;

  commentForm!: FormGroup;


  constructor(private momentService: MomentService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    private commentService: CommentService,
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data;
    });

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    });

  }

  get text(){
    return this.commentForm.get('text')!;
  }

  get username(){
    return this.commentForm.get('username')!;
  }

  async removeHandler(id: number){
    await this.momentService.removeMoment(id).subscribe();

    this.messagesService.add("Momento excluído com sucesso!");

    this.router.navigate(['/']);
  }

  routerLinkFunciona(pag: number | undefined) {
    const url = "moments/edit/" + pag;
    this.router.navigate([url]);
  }

  async onSubmit(formDirective: FormGroupDirective){

    if(this.commentForm.invalid){
      return
    }

    const data: Comment = this.commentForm.value;

    data.momentId = Number(this.moment!.id);

    await this.commentService.createComment(data).subscribe((comment) => this.moment!.comments!.push(comment.data));

    this.messagesService.add("Comentário adicionado com sucesso!");

    this.commentForm.reset();

    formDirective.resetForm(); 

  }

}
