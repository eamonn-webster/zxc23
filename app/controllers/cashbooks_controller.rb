class CashbooksController < ApplicationController
  before_action :set_cashbook, only: [:show, :update, :destroy]

  # GET /cashbooks
  def index
    @cashbooks = Cashbook.all

    render json: @cashbooks
  end

  # GET /cashbooks/1
  def show
    render json: @cashbook
  end

  # POST /cashbooks
  def create
    @cashbook = Cashbook.new(cashbook_params)

    if @cashbook.save
      render json: @cashbook, status: :created
    else
      render json: @cashbook.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cashbooks/1
  def update
    if @cashbook.update(cashbook_params)
      render json: @cashbook
    else
      render json: @cashbook.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cashbooks/1
  def destroy
    if @cashbook.destroy
      head :no_content, status: :ok
    else
      render json: @cashbook.errors, status: :unprocessable_entity
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_cashbook
    @cashbook = Cashbook.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def cashbook_params
    params.require(:cashbook).permit(:title, :type, :opening_value, :opening_flag)
  end
end
