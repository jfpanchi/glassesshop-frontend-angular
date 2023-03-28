import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlassesDataService } from '../service/glasses-data.service';

@Component({
  selector: 'app-glasse',
  templateUrl: './glasse.component.html',
  styleUrls: ['./glasse.component.css'],
})
export class GlasseComponent implements OnInit {
  glasse: any = [];
  id: any;

  isDisabledNext = false;
  isDisabledPreview = false;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private glassesDataService: GlassesDataService
  ) {
    this.activateRouter.params.subscribe(({ id: miId }) => {
      this.id = miId;

      this.isDisabledNext = this.id < this.glassesDataService.data.length - 1 ? false : true;
      this.isDisabledPreview = this.id > 0 ? false : true;

      this.glasse = this.glassesDataService.getGlasse(this.id);
    });
  }

  ngOnInit() {}

  next() {
    ++this.id;
    this.router.navigate(['/shop/glasse', this.id]);
  }

  preview() {
    --this.id;
    this.router.navigate(['/shop/glasse', this.id]);
  }
}
