import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import type { RelicEntity, RelicsService, DeleteRelicDto, CreateRelicDto, UpdateRelicDto } from "@relics";

@Controller('relics')
export class RelicsController {
    constructor(private relicsService: RelicsService) { };

    @Post()
    async create(@Body() relicDto: CreateRelicDto) {
        return this.relicsService.create(relicDto);
    }

    @Get()
    async getAll() {
        return this.relicsService.getAll();
    }

    @Get(':url_name/annoucements')
    async getAnnoucementsByRelic(@Param('url_name') url_name: string): Promise<RelicEntity | null> {
        return this.relicsService.getAnnoucementsByRelic(url_name);
    }

    @Put(':url_name/update')
    async updateRelic(@Param('url_name') url_name: string, @Body() updateRelicDto: UpdateRelicDto) {
        return this.relicsService.update(updateRelicDto)
    }

    @Delete(':url_name/delete')
    async deleteRelic(@Param('url_name') url_name: string, @Body() deleteRelicDto: DeleteRelicDto) {
        return this.relicsService.delete(deleteRelicDto)
    }
}
