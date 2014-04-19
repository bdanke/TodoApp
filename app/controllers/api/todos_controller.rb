class Api::TodosController < ApplicationController
	def create
		@todo = Todo.new(params[:todo])

		if @todo.save
			render :json => @todo
		else
			render :json => @todo.errors, :status => :unprocessable_entity
		end
	end

	def destroy
		@todo = Todo.find(params[:id])

		if @todo.destroy
			render :json => @todo
		else
			render :text => "error", :status => :unprocessable_entity
		end
	end

	def index
		@todos = Todo.all
		render :json => @todos
	end
end