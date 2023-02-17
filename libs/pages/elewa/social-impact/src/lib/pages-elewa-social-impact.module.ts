import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialImpactPageComponent } from './pages/social-impact-page/social-impact-page.component';

import { SocialImpactRoutingModule } from './social-impact.routing';
import { BannersModule } from "@elewa-group/features/components/banners";
import { ElewaImpactBeyondComponent } from './pages/components/elewa-impact-beyond/elewa-impact-beyond.component'

@NgModule({
  imports: [CommonModule,SocialImpactRoutingModule,BannersModule],
  declarations: [SocialImpactPageComponent, ElewaImpactBeyondComponent],
})
export class SocialImpactModule {}
